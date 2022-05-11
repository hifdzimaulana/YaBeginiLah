import React, { Component } from "react";
import axios from "../config/axios";
import { Link, NavLink } from "react-router-dom";
import { Footer, Navbar } from "../components";
import Catalog from "react-catalog-view";
import '../components/buku.css'

class Buku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buku: [],
      isModalOpen: false,
      token: "",
      nama: "",
      id: 0,
      judul: "",
      penulis: "",
      penerbit: "",
      stok: 0,
    };

    axios.get("/buku").then((res) => this.setState({ buku: res.data.data }));
  }
  render() {
    return (
      <>
        <Navbar />
        <div class="wrapper bg-gray-400 antialiased text-gray-900">
<div>
    
    {/* <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md">     */}
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
 
  <div class="mt-1">
    $1800
    <span class="text-gray-600 text-sm">   /wk</span>
  </div>
  <div class="mt-4">
    <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>
        <Footer />
      </>
    );
  }
}

export default Buku;
