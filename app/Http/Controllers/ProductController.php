<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Image;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::latest()->get();
        return response()->json($products,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'productTitle' => 'required|max:190|unique:products,title',
            'productPrice' => 'required|integer',
            'productDescription' => 'required',
            'productImage' => 'required',

        ]);

        //Getting image extention
        $strpos = strpos($request->productImage, ';');
        $sub = substr($request->productImage, 0, $strpos);
        $ex = explode('/', $sub)[1];
        $name = time() . "." . $ex;
        $img = Image::make($request->productImage)->resize(200, 200);
        $upload_path = public_path() . "/uploadimage/";
       
        $img->save($upload_path . $name);

        $savedImageWithPath="/uploadimage/".$name;
     

        Product::create([

            'title' => $validatedData['productTitle'],
            'slug' => Str::slug($validatedData['productTitle']),
            'price' => $validatedData['productPrice'],
            'description' => $validatedData['productDescription'],
            'image'=>$savedImageWithPath,




        ]);

        return response()->json(['success', 200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {  
        return response()->json($product, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        
        
        $validatedData = $request->validate([
            'title' => "required|max:190|unique:products,title, $product->id",
            'price' => 'required|integer',
            'description' => 'required',
            

        ]);


        $product->update([

            'title' => $validatedData['title'],
            'slug' => Str::slug($validatedData['title']),
            'price' => $validatedData['price'],
            'description' => $validatedData['description'],
            //'image'=>$savedImageWithPath,




        ]);

        if($request->image){
            $strpos = strpos($request->image, ';');
            $sub = substr($request->image, 0, $strpos);
            $ex = explode('/', $sub)[1];
            $name = time() . "." . $ex;
            $img = Image::make($request->image)->resize(200, 200);
            $upload_path = public_path() . "/uploadimage/";
           
            $img->save($upload_path . $name);
    
            $savedImageWithPath="/uploadimage/".$name;
            $product->image= $savedImageWithPath;
        }
        $product->save();
        return response()->json('success', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}