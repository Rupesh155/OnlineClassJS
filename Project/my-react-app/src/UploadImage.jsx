import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dbamxsawiwiqjkjwygxi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYW14c2F3aXdpcWprand5Z3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTk1MTksImV4cCI6MjA3NzQ5NTUxOX0.TrnViqpphEBldaDMgX_HNky3XvyNUsEL1umoQZyEhqU';
const supabase = createClient(supabaseUrl, supabaseKey);
const UploadImage = () => {
   let [Img,SetImg]=   useState('')
   function fun1(e){
    console.log(e.target.files[0].name,"heheheh");
    SetImg(e.target.files[0])
    
    console.log(Img,  'hehehe');
    

   }
   async  function save(){
    const { data, error } = await supabase.storage.from('sam').upload('insta_images/' + Img.name, Img);
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/sam/insta_images/${Img.name}`;
    console.log(imageUrl,"blocking zzzzzzz");

   }
  return (
    <div>
        <input  onChange={fun1} type='file' />
        <button onClick={save}>click</button>
    </div>
  )
}

export default UploadImage