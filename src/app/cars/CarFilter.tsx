const CarFilters = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-5 gap-6 mb-4">
        <select id="car-type" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Type</option>
          <option value="minibus">Minibus</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
        </select>
        <select id="car-brand" className="form-select w-full py-2 px-4 bg-white  border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Brand</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="ford">Ford</option>
        </select>
        <select id="car-model" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Model</option>
          <option value="corolla">Corolla</option>
          <option value="civic">Civic</option>
          <option value="focus">Focus</option>
        </select>
        <select id="car-year" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Year</option>
          <option value="2010">2010</option>
          <option value="2015">2015</option>
          <option value="2020">2020</option>
        </select>
        <select id="car-category" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Category</option>
          <option value="compact">Compacto</option>
          <option value="midsize">Médio</option>
          <option value="luxury">Luxo</option>
        </select>
        <select id="car-fuel" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Fuel</option>
          <option value="gasoline">Gasolina</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Híbrido</option>
        </select>
        <select id="car-milage" className="form-select w-full py-2 px-4 bg-white  border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Kms</option>
          <option value="10000">10,000</option>
          <option value="50000">50,000</option>
          <option value="100000">100,000</option>
        </select>
        <div className="col-span-2 gap-6 mt-auto">
        <input
          id="car-range"
          type="range"
          className="w-full h-2 cursor-pointer"
          defaultValue="50"
        />
        </div>
        <div className="col-span-1 flex w-full items-center justify-end">
          <button type="button" className=" w-full bg-blue-500 text-white py-2 px-4  focus:outline-none hover:bg-blue-600">
            Search
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default CarFilters;
