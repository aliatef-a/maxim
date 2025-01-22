import Button from "./Button"

const Status = ({ img, title, description, buttonText, buttonHref, onClick }) => {
    return (
        <div className="container section-gap">
            <div className="flex justify-center flex-col items-center gap-5">
                <div>
                    <img src={img} alt="success" className="w-full h-full" />
                </div>
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <p className="text-center text-sm text-gray-500">{description}</p>
                <div className="w-[200px] sm:w-[250px] !text-center">
                    <Button
                        href={buttonHref}
                        text={buttonText}
                        className="w-full !text-center items-center justify-center"
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Status