const Carousel = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div id="item1" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div id="item2" className="carousel-item ">
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div id="item3" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div id="item4" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Burger"
          />
        </div>
        <div id="item5" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Burger"
          />
        </div>
        <div id="item6" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Burger"
          />
        </div>
        <div id="item7" className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Burger"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item7" className="btn btn-xs">
          2
        </a>
      </div>
    </div>
  );
};

export default Carousel;
