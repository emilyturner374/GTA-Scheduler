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
    labId: uniqid(),
    labName: '',
    days: '',
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: '',
    //courseList: []
};

export default function LabList() {
    const [labs, setLabs] = useState([defaultLabVals]);
    
    function changeLabName(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].labName = val;
        setLabs(newLabs); 
        console.log("labs before map:")
        console.log(labs);
    }
    function changeDays(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].days = val;
        setLabs(newLabs); 
    }

    function changeStart(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].startTime = val;
        setLabs(newLabs); 
    }

    function changeStartAmPm(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].startAmPm = val;
        setLabs(newLabs); 
    }

    function changeEnd(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].endTime = val;
        setLabs(newLabs); 
    }

    function changeEndAmPm(val, id) {
        const newLabs = [...labs];
        const index = newLabs.findIndex(lab => lab.labId === id);
        newLabs[index].endAmPm = val;
        setLabs(newLabs); 
    }

    function deleteLab(val){
        console.log(labs.filter(lab => lab.labId !== val));
        return setLabs(prev=>prev.filter(lab => lab.labId !== val));
    }

    return(
        <LabContainer>
            <LabHeader>
                Lab List
            </LabHeader>
            <ContentWrap>
                {labs.map((lab) => {
                    const { labId,  
                            labName,
                            days,
                            startTime,
                            startAmPm,
                            endTime,
                            endAmPm,} = lab;
                    console.log(labs);

                    return(
                        <Lab
                            key = {labId}
                            labId = {labId}
                            labName = {labName}
                            days = {days}
                            startTime = {startTime}
                            startAmPm = {startAmPm}
                            endTime = {endTime}
                            endAmPm = {endAmPm}
                            changeLabName = {changeLabName}
                            changeDays = {changeDays}
                            changeStart = {changeStart}
                            changeStartAmPm = {changeStartAmPm}
                            changeEnd = {changeEnd}
                            changeEndAmPm = {changeEndAmPm}
                            deleteLab = {deleteLab}
                            //courseList={courseList}
                        />
                    );
                })}
                <AddLabBtn
                    type='button'
                    onClick={() => setLabs([ ...labs, 
                        {labId: uniqid(),
                            labName: '',
                            days: '',
                            startTime: '',
                            startAmPm: '',
                            endTime: '',
                            endAmPm: '',    
                        }
                    ])}
                >
                    Add lab
                </AddLabBtn>
            </ContentWrap>
        </LabContainer>
    );
};