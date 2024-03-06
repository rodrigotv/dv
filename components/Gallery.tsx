import Image from "./Image"

interface Pictures {
  id: number,
  path: string,
  alt: string,
  width: number,
  height: number,
  caption?: string 
  className?: string
}

interface Grid {
  className?: string,
  caption?: string
}

const Gallery = ( { grid, pictures }: { grid: Grid, pictures: Pictures[] }) => {
  const baseUrl = '/static/images/'
  let className = grid.className
  if (!className) className = ''
  if (className.indexOf('mt-') === -1 && className.indexOf('my-') === -1) className += ' mt-8'
  if (className.indexOf('mb-') === -1 && className.indexOf('my-') === -1) className += ' mb-12'
  if (className.indexOf('mb-12') !== -1 && className.indexOf('mt-8') !== -1) className += ' place-items-center'

  return (
    <div className={`gallery-container mx-auto grid ${className}`}>
      {
        pictures.map(pic => {
          const {id, path, alt, width, height, caption, className=''} = pic
          const url = `${baseUrl}${path}`
          const pathParts = path.replace(/\/|\./g, ' ').split(' ')
          const key = pathParts[pathParts.length - 2]
          return(
            <figure key={key} className={`grid-item ${className}`}
            >
              <Image 
                src={url}
                alt={alt} 
                width={width}
                height={height}
                className={`object-cover`}
              />
              {caption && <figcaption>{caption}</figcaption>}
            </figure>
          )
        })
      }
      <figcaption className="order-last">{grid.caption}</figcaption>
    </div>
  )
}

export default Gallery