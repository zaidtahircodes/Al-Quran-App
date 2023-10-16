export default function infoCard(props) {


return (
        <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl font-extrabold">{props.item}</dt>
        <dd className="text-gray-500 dark:text-gray-400">{props.title}</dd>
        </div>
     
)
}