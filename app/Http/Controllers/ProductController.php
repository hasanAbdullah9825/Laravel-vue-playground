<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
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
        return response()->json($products, 200);
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
    {//dd( $request->all());
        $validatedData = $request->validate([
            'productTitle' => 'required|max:190|unique:products,title',
            'productPrice' => 'required|integer',
            'productDescription' => 'required',
            'productImageObject' => 'required|image',

        ]);


        $productImageObject = $validatedData['productImageObject'];
        $image = Image::make($productImageObject)->resize(200, 200)->stream();


        $ext = $productImageObject->getClientOriginalExtension();
        $imageName = uniqid() . "." . $ext;

        Storage::disk('public')->put('product/' . $imageName, $image);
        //Storage::disk('public')->putFileAs('product', $productImageObject, $imageName);

        $imageLocation = "product/" . $imageName;


        Product::create([

            'title' => $validatedData['productTitle'],
            'slug' => Str::slug($validatedData['productTitle']),
            'price' => $validatedData['productPrice'],
            'description' => $validatedData['productDescription'],
            'image' => $imageLocation,




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
            'UpdatedProductImageObject' => 'nullable|image',


        ]);


        if ($request->UpdatedProductImageObject) {
            $UpdatedProductImageObject = $validatedData['UpdatedProductImageObject'];
            $image = Image::make($UpdatedProductImageObject)->resize(200, 200)->stream();

            $ext = $UpdatedProductImageObject->getClientOriginalExtension();
            $imageName = uniqid() . "." . $ext;

            Storage::disk('public')->put('product/' . $imageName, $image);
            $imageLocation = "product/" . $imageName;


            $product->update([

                'title' => $validatedData['title'],
                'slug' => Str::slug($validatedData['title']),
                'price' => $validatedData['price'],
                'description' => $validatedData['description'],
                'image' => $imageLocation,

            ]);
        } else {

            $product->update([

                'title' => $validatedData['title'],
                'slug' => Str::slug($validatedData['title']),
                'price' => $validatedData['price'],
                'description' => $validatedData['description'],

            ]);
        }



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
