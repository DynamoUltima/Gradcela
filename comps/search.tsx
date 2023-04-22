const Search = () => {
    return (
     
            <div className="flex items-center ring-2 ring-gray-400 bg-white rounded-md  w-96 focus:outline-none shadow-none">
                <label htmlFor="name" className="w-10 text-right ml-4 mr-8 text-purple-20 "><svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></label>
                <input type="text" id="name" name="name" placeholder="search" className="flex-1 px-4 py-2 pl-0 bg-transparent placeholder-gray-300 focus:outline-none border-transparent text-gray-400 rounded-md"/>
            </div>
     
    );
}

export default Search;