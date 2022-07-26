<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Suggestion;

class SuggestController extends Controller
{
    //After page mounted in frontend, call this function to make data up-to-date
    function update(){
        
        //Fetch data from Innosabi
        $res = Http::withBasicAuth('api@innosabi.com', '0thRuch0')->get("https://idea.innosabi.com/api/v4/suggestion");
        
        //Convert Json data to array
        $arr = json_decode($res, true);
       
        //initialize data, that will be sent to database
        $table = array();
        
        //Get data from array to send local..
        foreach($arr["data"] as $data){
                       
            $temp = array($data["id"], $data["title"],  $data["content"], $data["language"],
            $data["created"]["date"], $data["submitted"]["date"], 
            $data["updated"]["date"]);
            
            array_push($table, $temp);

        }
       
        //Insert all data from Innosabi api to local..
        $this->insert($table);
        
    }

    //Insert all data, come from update function(innosabi api), to local 
    function insert($table){
        
        //Delete old Data from local...
        Suggestion::truncate();
        
        foreach($table as $data){
            $suggestion = new Suggestion([
                'id'        => $data[0],
                'title'     => $data[1],
                'content'   => $data[2],
                'language'  => $data[3],
                'created'   => $data[4], 
                'submitted' => $data[5], 
                'updated'   => $data[6],
        ]);
            $suggestion->save();
        }

    }

    //Firstly update local with innosabi data..
    //Fetch local data for the Frontend..
    function fetchLocal(){
        
        //Update Local
        $this->update();

        $suggestions = Suggestion::all();

        return response()->json([
            'status' => 200,
            'suggestions' => $suggestions
        ]);
    }

    //Fetch all searching data and return to Frontend..
    function searchLocal($search){
        $suggestions = Suggestion::where('title', 'like', '%' . $search . '%')
            ->orWhere('content','like', '%' . $search . '%')->get();

        return response()->json([
            'status' => 200,
            'suggestions' => $suggestions
        ]);
    }
   


}
