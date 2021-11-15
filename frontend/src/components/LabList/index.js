import uniqid from 'uniqid';
import { useState } from 'react'
import Lab from '../../components/Lab';
import { LabContainer, 
        LabHeader,
        ContentWrap,
        AddLabBtn } 
        from './LabListElements';

const defaultLabVals = {
    //Make default mNumber a random number
    //so empty entries can still be deleted
    id: uniqid(),
    labName: '',
    days: '',
    startTime: '',
    endTime: '',
    //courseList: []
};

const defaultLabList = {
    labList: [defaultLabVals],
};        
export default function LabList() {
    const [labs, setLabs] = useState(defaultLabList);
    const { labList } = labs;
    
    function changeLabName(val) {
        setLabs((prev) => ({
                ...prev,
                labName : val
             }))
        console.log(labs);
    }
    function changeDays(val) {
        setLabs((prev) => ({
                ...prev,
                days : val
             }))
        console.log(labs);
    }

    function changeStart(val) {
        setLabs((prev) => ({
                ...prev,
                startTime : val
             }))
        console.log(labs);
    }
    
    function changeEnd(val) {
        setLabs((prev) => ({
                ...prev,
                endTime : val
             }))
        console.log(labs);
    }

    function deleteLab(val){
        const index = labList.findIndex(({ id }) => id === val);
        if (index !== -1) {
            setLabs([
                ...labList.slice(0, index),
                ...labList.slice(index + 1)
            ]);
        }
    }

    return(
        <LabContainer>
            <LabHeader>
                Lab List
            </LabHeader>
            <ContentWrap>
                {labList.map((lab) => {
                    const { labName, days, startTime, endTime, id } = lab;
                    return(
                        <Lab
                            labName={labName}
                            days={days}
                            startTime={startTime}
                            endTime={endTime}
                            id = {id}
                            changeLabName = {changeLabName}
                            changeDays = {changeDays}
                            changeStart = {changeStart}
                            changeEnd = {changeEnd}
                            deleteLab = {deleteLab}
                            //courseList={courseList}
                        />
                    );
                })}
                <AddLabBtn
                    type='button'
                    onClick={() => setLabs( (prev) => ({
                        ...prev,
                        labList: [ 
                            ...prev.labList,
                            {
                                //Default values
                                id: uniqid(),
                                labName: '',
                                days: '',
                                startTime: '',
                                endTime: '',
                            }
                        ]
                        
                    }))}
                >
                    Add lab
                </AddLabBtn>
            </ContentWrap>
        </LabContainer>
    );
};