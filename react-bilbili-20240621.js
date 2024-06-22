
const App2 = ()=>{

    const [value,setValue] = useState('')
    const [checked,setChecked] = useState(false)

    return (
        <>
            {/* 普通输入框 */}
            <input 
                value={value}
                onInput={event =>setValue(event.target.value)}
            />

            {/* onChange 输入框 */}
            <input 
                value = {checked}
                onChange = {event =>setChecked(event.target.value)}
            />
        </>
    )
}

const App3 = () => { 
    const [count ,setCount] = useState('')

    const arr = [1,2,3]
    const [a,b,c] = arr
    console.log(a,b,c);     // 1,2,3

    const arr2 = {
        a1,
        b:2,
        c:3
    }

    const {e,f,g} = arr2
    console.log(e,f,g)      // 1,2,3

 }

class App4 extends Component {
    showResult (){
        // 通过refs.username 获取结果
        console.log(this.refs.username.value)
    }

    render(){
        <div>
            <input type='text' ref='username' />

            <button onClick={this.showResult.bind(this)} > button </button>
        </div>
    }
}

// start  7

import {Suspense} from 'react'

function Test(){
    return (
        <div>
            {/* 当懒加载未完成时，显示loading效果 */}
            <Suspense fallback={
                <div>Loading</div>
            } >

                {/* 需要正常渲染的组件 */}
                <Comp />

            </Suspense>
        </div>
    )
}

// end 7


const useRefDemo = () => { 
     
 }
 