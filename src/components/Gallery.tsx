import { useState } from 'react'
import sculptureList from '../data.json'

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    const handleNextClick = () => {
        if (index < sculptureList.length - 1 && index <= 12) {
            setIndex(index + 1)
        }
    }
    const handlePreviosClick = () => {
        if (index < sculptureList.length && index > 0) {
            setIndex(index - 1)
        }
    }

    const handleMoreClick = () => {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]

    return (
        <div className="main">
            <h2>
                {sculpture.name + ' by ' + sculpture.artist}
            </h2>
            {index + 1 + ' of ' + sculptureList.length}
            <button className='show-more' onClick={handleMoreClick}>
                {showMore ? "Hide" : "Show"} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <div className="buttons">
                <button onClick={handlePreviosClick}>
                    Previos
                </button>
                <button onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Gallery