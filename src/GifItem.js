export const GifItem = ({title, url}) => {
    return(
        <div class="card">
            <img src={url} alt={title}/>
        </div>
    )
    }