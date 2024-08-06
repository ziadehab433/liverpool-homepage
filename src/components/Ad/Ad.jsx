import "./Ad.css"

const Ad = ({variant}) => {
    if (variant == "big") { 
        return ( 
            <div className="big-ad">
                <img src="https://tpc.googlesyndication.com/simgad/17329446794438475227" alt="" />
                <img src="https://tpc.googlesyndication.com/simgad/830060313902980476" alt="" />
            </div>
        )
    }

    return ( 
        <div className="small-ad">
            <img src="https://tpc.googlesyndication.com/simgad/16838486143085751080" alt="" />
        </div>
    )
}

export default Ad