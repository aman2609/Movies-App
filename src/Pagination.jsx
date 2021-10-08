let Pagination=(props)=>{
    let arr= [];
    for(let i=1;i<=props.numOfPages;i++){
        arr.push(i);
    }
    return(
        
    <div class="row">
        <nav >
            <ul class="pagination mt-4">
                {arr.map((el)=>{
                    return (
                    <>
                        {el===props.currPage?(<li onClick={()=>{props.handlePage(el)}} class="page-item active"><a class="page-link" href="#">{el}</a></li>):(<li onClick={()=>{props.handlePage(el)}} class="page-item"><a class="page-link" href="#">{el}</a></li>)}
                    </>
                    );
                })}
                
            </ul>
        </nav>
    </div>
    );
}
export default Pagination;