import '../../styles/header/search.css'



function Search() {
    return (
        <div className={'search__container'}>
                <input type="text" className={'search__input'} placeholder={'Search'}/>

                <select name="search" id="search" className={'search__select'}>
                    <option className={'search__options'} value="grapefruit">Grapefruit</option>
                    <option className={'search__options'} value="lime">Lime</option>
                    <option className={'search__options'} value="coconut">Coconut</option>
                    <option className={'search__options'} value="mango">Mango</option>

                </select>

            <button type={"button"} className={'search__button'}>Search</button>
        </div>

    );
}

export default Search;
