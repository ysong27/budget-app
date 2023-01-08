import React from "react"
import { ProgressBar, Card, Stack, Button } from "react-bootstrap"
import { currencyFormatter } from "../utils"

function BudgetCard({name, amount, max, gray}) {
    const cardClassNames = []

    // if amount exceeds max, have red background
    if (Number(amount) > Number(max)) {
        cardClassNames.push("bg-danger", "bg-opacity-10")
    } else if (gray) {
        cardClassNames.push("bg-light")
    }


    return (
        <Card className={cardClassNames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div>{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)} 
                        <span className="text-muted fs-6 ms-1"> / {currencyFormatter.format(max)}</span>
                    </div>
                </Card.Title>
                <ProgressBar className="rounded-pill" variant={getProgressBarVariant(amount, max)} min="0" max={max} now={amount} />
                <Stack direction="horizontal" gap="2" className="d-flex justify-content-end mt-4">
                    <Button variant="outline-primary">Add Expense</Button>
                    <Button variant="outline-secondary">View Expenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}


function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) {
        return "primary"
    }
    if (ratio < 0.75) {
        return "warning"
    }
    return "danger"
}


export default BudgetCard 

