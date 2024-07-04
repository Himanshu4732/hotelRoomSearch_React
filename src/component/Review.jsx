import React from "react";
import ReviewCont from "./ReviewCont";
import '../App.css'


function Review() {
  return (
    <div
      className=" w-full bg-white flex flex-col justify-center relative z-[-2] gap-5
    items-center"
    >
      <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent z-[-1]">hero</div>
      <div class="nine">
  <h1 className="py-10">TOUR PLACES<span>A long last memory</span></h1>
</div>
      <ReviewCont
        image="https://img.freepik.com/premium-photo/van-forest-with-light-top-that-says-camper-van_900396-52978.jpg"
        flex="p-2"
        heading="Special Private Tour"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ducimus ex nemo quam nisi id repellendus, minus iste tenetur, earum temporibus natus velit quidem."
      />
      <ReviewCont
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPzlG4BbElmz3uIrKaUSj5ZKwukW_dvhlww&s"
        flex="flex-row-reverse"
        heading="Lake tour"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ducimus ex nemo quam nisi id repellendus, minus iste tenetur, earum temporibus natus velit quidem."
      />
      <ReviewCont
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmz42fCuDOB_6qi0UfrlU8w3bZm9yoEKFyUQ&s"
        flex="p-2"
        heading="Special Private Tour"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ducimus ex nemo quam nisi id repellendus, minus iste tenetur, earum temporibus natus velit quidem."
      />
    </div>
  );
}

export default Review;
