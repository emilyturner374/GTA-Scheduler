import { BsXCircle } from 'react-icons/bs';
import {LabInfoWrap,
        LabInfo,
        InputBox,
        TimeWrap,
        TimeBox,
        TimeInput,
        AmPmSelect,
        DaysWrap,
        DayBtn,
        DeleteLabBtn }
        from './LabElements'

export default function Lab(
                        {labId, 
                        labName,
                        days,
                        startTime,
                        startAmPm,
                        endTime,
                        endAmPm,
                        changeLabInfo,
                        deleteLab}
){    
    return(
        <LabInfoWrap>
            <LabInfo>
                <InputBox 
                    placeholder="Lab name"
                    value={labName}
                    onChange = { e => changeLabInfo(e.target.value, labId, "labName")}
                />
                <DaysWrap>
                    <DayBtn 
                        value="Monday" 
                        type="button"
                    >
                            Mon
                    </DayBtn>
                    <DayBtn 
                        value="Tuesday" 
                        type="button"
                    >
                        Tue
                    </DayBtn>
                    <DayBtn 
                        value="Wednesday" 
                        type="button"
                    >
                        Wed
                    </DayBtn>
                    <DayBtn 
                        value="Thursday" 
                        type="button"
                    >
                        Thu
                    </DayBtn>
                    <DayBtn 
                        value="Friday" 
                        type="button"
                    >
                        Fri
                    </DayBtn>
                </DaysWrap>
                <TimeWrap>
                    <TimeBox>
                        <TimeInput 
                            placeholder="10:00"
                            value={startTime}
                            onChange = { e => changeLabInfo(e.target.value, labId, "startTime")}
                        />
                        <AmPmSelect
                            onChange = { e => changeLabInfo(e.target.value, labId, "startAmPm")}
                        >
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                    to
                    <TimeBox>
                        <TimeInput 
                            placeholder="10:30"
                            value={endTime}
                            onChange = { e => changeLabInfo(e.target.value, labId, "endTime")}
                        />
                        <AmPmSelect
                            onChange = { e => changeLabInfo(e.target.value, labId, "endAmPm")}
                        >
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                </TimeWrap>
                <DeleteLabBtn
                    type = "button"
                    onClick = {() => deleteLab(labId)}
                >
                    <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
                </DeleteLabBtn>
            </LabInfo>
        </LabInfoWrap>
    );
}