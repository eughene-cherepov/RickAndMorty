import image from './logo.e1f86449.svg'

interface PropTypes {
  type: string;
  className: any;
}

export const Image: React.FC<PropTypes> = ({ type, className }) => {
  console.log(image)
  switch (type) {
    case 'logo':
      return <img src={image} className={className} />

    default:
      return null;
  }
}