# ahooks
create time：20240622
地址：https://www.bilibili.com/video/BV1124y1y7wF/?spm_id_from=333.337.search-card.all.click&vd_source=76726883053235fcf232f2186b9fb68c

## useRequest

强大的异步数据管理 hooks, 处理网络请求场景

请求管理异步函数的返回内容包括，data 数据，error 错误，loading, 轮询，防抖，节流，缓存，swr


## react-hook-form 

```tsx
const App = ()=>{
    const {register, handleSubmit} = useForm()

    const onSubmit = ()=>{}

    return (
        <div>
            {/* <form onClick={onSubmit}> */}
            <form onClick={handleSubmit(onSubmit)}>

                <span>First name </span>
                <input {register('firstName')} />

            </form>
        </div>
    )
}

```

form 表单校验

```jsx

    const {register, handleSubmit, formState:{errors}} = useForm()

    return (
        <div>
            {/* <form onClick={onSubmit}> */}
            <form onClick={handleSubmit(onSubmit)}>

                <span>First name </span>
                {/* 需要进行校验 */}
                <input {register('firstName',{required: true})} />

                {/* 处理显示error */}
                {error.firstName && (
                    <div>wrong</div>
                )}

            </form>
        </div>
    )

```