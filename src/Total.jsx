export const Total = ({exercises1, exercises2, exercises3}) => {
    
    const totalSum = exercises1 + exercises2 + exercises3;
    
    return (
        <p> Number of exercises {totalSum} </p>
    )
};
