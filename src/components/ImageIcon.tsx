const ImageIcon: React.FC<{
    url: string|undefined;
    ht?: string|number|undefined;
    wt?: string|number|undefined;
    className?: string;
  }> = ({ url, ht, wt, className }) => {
    return <img src={url} alt="icons" width={wt} height={ht} className={className}/>;
  };
  
  export default ImageIcon












  