import React from 'react'
import { Link , useParams} from 'react-router-dom'
import { ColleagueData } from '../Colleague/ColleagueData'
import LayoutAdmin from '../layout/LayoutAdmin'


const DetailedNews = () => {
    let {id} = useParams()

    return (
        <LayoutAdmin>
            <div className='container-fluid px-2 py-2 m-0'>
                <div className='d-flex px-4'>
                    <Link to="/admin" className='p-1 btn bg-primary bgprimary border-0 text-white my-2 me-auto'> بازگشت به صفحه اصلی </Link>
                </div>
                <div className=' p-3'>
                    {
                        ColleagueData.filter((news)=> news.id === Number(id)).map( items => (
                            <>
                                <div className='border my-1 p-2 ttt'>
                                    <div key={items.id} className="d-flex align-content-center p-3">
                                        <img src={items.image} alt={items.id} className="img-fluid imgNews2" />
                                        <p className='fw-bold p-2 aaa'>
                                            {items.News}
                                        </p>
                                    </div>
                                    <div className='bg-white rounded p-2'>
                                        <p className='px-2 ccc'>
                                            {items.description}
                                        </p>
                                    <div className='p-2'>
                                        <h6 className='text-secondary'>
                                            {items.Data}
                                        </h6>
                                        <h6 className='text-secondary'>
                                            {items.watch}
                                        </h6>
                                    </div>
                                    </div>
                                </div>
                            </>
                        ) )
                    }
                </div>
            </div>
        </LayoutAdmin>
    )
}

export default DetailedNews