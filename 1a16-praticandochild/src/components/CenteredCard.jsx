import './styles.css'

function CenteredCard({children}){
    return(
        <div className='centeredCard'>
            <span>
                {children}
            </span>
        </div>
    )
}

export default CenteredCard