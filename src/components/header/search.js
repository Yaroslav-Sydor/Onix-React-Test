import '../../styles/header/search.css'



function Search() {
    return (
        <div className={'search__container'}>
                <input type="text" className={'search__input'}/>
{/*
                <select name="search" id="search" className={'search__select'}>All Category</select>
*/}
            <div  className={'search__select'}>All Category</div>

            <button type={"button"} className={'search__button'}>Search</button>
        </div>

    );
}

export default Search;
