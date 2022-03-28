import { Link } from "react-router-dom"

export const NotFoundScreen = () => {
    return (
        <div className="img-notFound">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBdLc14qBt9EGK4NtakuhJY6mvU2FS_ubkQ&usqp=CAU" alt="notFoundPage404"/>

            <div className="text-notFound">
                No tienes ningun anime agregado a tu lista. Agrega uno!!! <Link to="/">Aquí</Link>
            </div>
        </div>
    )
}
