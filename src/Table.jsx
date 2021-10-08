import Pagination from "./Pagination";
import React from "react";
class Table extends React.Component{
    state={currPage:1,}
    handlePage=(el)=>{
        this.setState({currPage:el,})
    }
    render(){

        let currMovies=this.props.movies;
        let currGenre=this.props.selectedFilter;
        let currMoviesArr=currMovies.filter((el)=>{
            if(currGenre==="All Genre"){
                return true;
            }else if(el.genre.name===currGenre){
                return true;
            }
        })
        currMoviesArr=currMoviesArr.filter((el)=>{
            let search=this.props.search.toLowerCase();
            let movieName=el.title.toLowerCase();
            return movieName.includes(search);
        })
        let numOfPages=Math.ceil(currMoviesArr.length/4);
        let lIndex=4*(this.state.currPage-1);
        let hIndex=4*(this.state.currPage);
        let arrayToBeUsed=currMoviesArr.slice(lIndex,Math.min(hIndex,currMoviesArr.length));
        return(
            <>
                <div class="row">
                    <table class="table table-striped m-4">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrayToBeUsed.map((el)=>{
                                return (
                                    <tr key={el._id}>
                                        <td>{el.title}</td>
                                        <td>{el.genre.name}</td>
                                        <td>{el.numberInStock}</td>
                                        <td>{el.dailyRentalRate}</td>
                                        <td >
                                            {el.liked ?
                                            (<span onClick={()=>{this.props.toggleLike(el._id)}} class="material-icons-outlined">favorite</span>):
                                            (<span onClick={()=>{this.props.toggleLike(el._id)}} class="material-icons-outlined">favorite_border</span>)}
                                        </td>
                                        <td><button onClick={()=>{this.props.deleteMovie(el._id)}} type="button" class="btn btn-secondary btn-sm">Delete</button></td>
                                    </tr>
                                );
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <Pagination currPage={this.state.currPage} numOfPages={numOfPages} handlePage={this.handlePage} />
            </>
        )
    }
}









// let Table=(props)=>{
//     let currMovies=props.movies;
//     let currGenre=props.selectedFilter;
//     let currMoviesArr=currMovies.filter((el)=>{
//         if(currGenre=="All Genre"){
//             return el;
//         }else if(el.genre.name==currGenre){
//             return el;
//         }
//     })
//     let arrayToBeUsed=currMoviesArr.slice(0,4);
//     return(
//     <>
//         <div class="row">
//             <table class="table table-striped m-4">
//                 <thead>
//                     <tr>
//                         <th scope="col">Title</th>
//                         <th scope="col">Genre</th>
//                         <th scope="col">Stock</th>
//                         <th scope="col">Rate</th>
//                         <th scope="col"></th>
//                         <th scope="col"></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {arrayToBeUsed.map((el)=>{
//                         return (
//                             <tr key={el._id}>
//                                 <td>{el.title}</td>
//                                 <td>{el.genre.name}</td>
//                                 <td>{el.numberInStock}</td>
//                                 <td>{el.dailyRentalRate}</td>
//                                 <td >
//                                     {el.liked ?
//                                     (<span onClick={()=>{props.toggleLike(el._id)}} class="material-icons-outlined">favorite</span>):
//                                     (<span onClick={()=>{props.toggleLike(el._id)}} class="material-icons-outlined">favorite_border</span>)}
//                                 </td>
//                                 <td><button onClick={()=>{props.deleteMovie(el._id)}} type="button" class="btn btn-secondary btn-sm">Delete</button></td>
//                             </tr>
//                         );
//                     })}
                    
//                 </tbody>
//             </table>
//         </div>
//         <Pagination/>
//     </>
//     );
// }

export default Table;