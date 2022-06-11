import React from 'react';
import '../styling/mainbody.css'

function MainBody(props) {

  return (
    <table>
        <tbody>
            {
                props.images.map(image => (
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
        </tbody>
    </table>
  );
}

export default MainBody