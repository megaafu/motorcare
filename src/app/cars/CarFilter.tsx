const CarFilters = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-5 gap-6 mb-4">
        <select id="car-type" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Tipo</option>
          <option value="minibus">Minibus</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
        </select>
        <select id="car-brand" className="form-select w-full py-2 px-4 bg-white  border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Marca</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="ford">Ford</option>
        </select>
        <select id="car-model" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Modelo</option>
          <option value="corolla">Corolla</option>
          <option value="civic">Civic</option>
          <option value="focus">Focus</option>
        </select>
        <select id="car-year" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Ano</option>
          <option value="2010">2010</option>
          <option value="2015">2015</option>
          <option value="2020">2020</option>
        </select>
        <select id="car-category" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Categoria</option>
          <option value="compact">Compacto</option>
          <option value="midsize">Médio</option>
          <option value="luxury">Luxo</option>
        </select>
        <select id="car-fuel" className="form-select w-full py-2 px-4 bg-white border border-gray-300 focus:outline-none focus:border-blue-500">
          <option value="">Combustível</option>
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
          className="w-full h-2 bg-gray-200 -lg appearance-none cursor-pointer"
          defaultValue="50"
        />
        </div>
        <div className="col-span-1 flex w-full items-center justify-end">
          <button type="button" className=" w-full bg-blue-500 text-white py-2 px-4  focus:outline-none hover:bg-blue-600">
            Pesquisar
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default CarFilters;
