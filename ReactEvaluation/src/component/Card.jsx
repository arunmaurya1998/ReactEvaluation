import {Box} from "@chakra-ui/react"

export default function Card(title,category,price){
    return(
        <Box>
        <div>
            <h1>Title: {title}</h1>
            <h2>Category: {category}</h2>
            <h3>Price: {price}</h3>
        </div>
        </Box>
    )
}