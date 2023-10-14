import { useState } from "react";
import Reset from './Reset';
import Output from './Output';
import SelectPercentage from './SelectPercentage';
import BillInput from './BillInput';

export default function TipCalculator() {
    const [bill, setBill] = useState("");
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
    }

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    return (
        <div>
            <BillInput bill={bill} onSetBill={setBill} />
            <SelectPercentage
                percentage={percentage1}
                onSetPercentage={setPercentage1}
            >
                How did you like the service?
            </SelectPercentage>
            <SelectPercentage
                percentage={percentage2}
                onSetPercentage={setPercentage2}
            >
                How did your friend like the service?
            </SelectPercentage>

            {bill > 0 &&
                <>
                    <Output bill={bill} tip={tip} />
                    <Reset OnHandleReset={handleReset} />
                </>}
        </div>
    );
}
