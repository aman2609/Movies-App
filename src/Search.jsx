let Search= (props)=> {
    return (
    < >
        <p class="mt-4">Showing {props.total} movies from the database</p>
            <div class="row">
                <div class="col-2">
                    <button class="btn btn-primary" type="button">New</button>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="input-group flex-nowrap ">
                        <input type="text" class="form-control mt-4" placeholder="Search" value={props.search} onChange={(e)=>{props.updateSearch(e.currentTarget.value)}}></input>
                    </div>
                </div>
            </div>
    </>);
}
export default Search;