import { memo } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ forwardLink, forwardPath, path }) => {

    return (
        <section
            className="w-full py-4 bg-cover bg-center"
            style={{
                backgroundImage: `url(${assets.BreadCrumbBg})`,
            }}
        >
            <div className="container flex items-center gap-2 text-secondary font-bold">
                <Link to={"/"}>
                    <img width={20} src={assets.HomeICon} alt="home icon" />
                </Link>
                <Link className='text-sm md:text-base' to={"/"}>الرئيسية</Link>
                <span className='text-sm md:text-base'>{'>'}</span>
                {forwardLink != undefined &&
                    <>
                        <Link className='text-sm md:text-base' to={forwardLink}>{forwardPath}</Link>
                        <span>{'>'}</span>
                    </>
                }
                <p className='text-sm md:text-base'>{path}</p>
            </div>
        </section>
    );
};

export default memo(Breadcrumb);
