import { useTranslation  } from "react-i18next";
import { useEffect } from 'react'

function Footer() {
    const { t } = useTranslation()
    useEffect(() => {
        const fn = () => console.log('move')
        window.addEventListener('mousemove', fn)
    }, [])
    return(
        <div className='max-w-[1140px] mx-auto px-4 py-8 text-gray-paragraph2'>
            <div className='flex justify-around flex-wrap w-full'>
                <div className='w-[320px] px-4 mt-8'>
                    <div className='text-center lg:text-left'>
                        <span className='text-5xl font-bold text-orange-600'>xizmat</span>
                    </div>
                    <p className='pt-6 text-2xl'>
                        {t('Footer-sub')}
                    </p>
                </div>
                    <div className='px-4 mt-8'>
                        <h4 className='text-gray-paragraph1 font-semibold'>{t('forClients')}</h4>
                        <ul className='pt-2'>
                            <li className='mt-2'><a href="/">{t('Instruction')}</a></li>
                            <li className='mt-2'><a href="/">{t('FAQ')}</a></li>
                            <li className='mt-2'><a href="/">{t('present')}</a></li>
                        </ul>
                    </div>
                    <div className='px-4 mt-8'>
                        <h4 className='text-gray-paragraph1 font-semibold'>{t('forPerformer')}</h4>
                        <ul className='pt-2'>
                            <li className='mt-2'><a href="/">{t('howStart')}</a></li>
                            <li className='mt-2'><a href="/">{t('Rates')}</a></li>
                            <li className='mt-2'><a href="/">{t('Instruction')}</a></li>
                        </ul>
                    </div>
                <div className='px-4 mt-8'>
                    <h4 className='text-gray-paragraph1 font-semibold'>{t('Contacts')}</h4>
                    <ul>
                        <li className='mt-2'>+998909990099</li>
                        <li className='mt-2'>info@xizmat@gmail.com</li>
                        <li className='mt-2'>xizmat.uz</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Footer