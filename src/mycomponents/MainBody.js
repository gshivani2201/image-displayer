import React, {useState, useEffect} from 'react'
import axios from 'axios'

function MainBody() {

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
             .then (res => {
                console.log(res)
                setImages(res.data)
             })
             .catch (err => {
                 console.log(err)
             })
    }, [])

  return (
    <table>
        {
            images.map(image => (
                <tr>
                    <td>{image.id}</td>
                    <td>{image.title}</td>
                    <td>
                        <img src={image.thumbnailUrl} alt={image.title} />
                    </td>
                </tr>
            ))
        }
    </table>
  )
}

export default MainBody