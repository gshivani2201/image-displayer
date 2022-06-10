import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styling/mainbody.css'

function MainBody() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=499')
             .then (res => {
                console.log(res)
                setImages(res.data)
             })
             .catch (err => {
                 console.log(err)
             })
    }, []);

  return (
    <table>
        {
            images.map(image => (
                <tr key={image.id}>
                    <td>{image.id}</td>
                    <td>{image.title}</td>
                    <td>
                        <a href={image.url} target='_blank'>
                            <img src={image.thumbnailUrl} alt={image.title} />
                        </a>
                    </td>
                </tr>
            ))
        }
    </table>
  );
}

export default MainBody