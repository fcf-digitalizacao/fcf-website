type LogoRowProps = {
  imagePath: string;
}

function LogoRow({ imagePath }: LogoRowProps) {
  return (
    <div className="logo-row">
      <div className="content-wrapper">
        <img src={imagePath} />
      </div>
    </div>
  );
}

export default LogoRow;
