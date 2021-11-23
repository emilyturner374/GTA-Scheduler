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
                        endTime,
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
                        selected = {days.findIndex(day => day === "Monday") === -1}
                        value="Monday" 
                        type="button"
                        onClick = { e => changeLabInfo(e.target.value, labId, "days")}
                    >
                            Mon
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Tuesday") === -1}
                        value="Tuesday" 
                        type="button"
                        onClick = { e => changeLabInfo(e.target.value, labId, "days")}
                    >
                        Tue
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Wednesday") === -1}
                        value="Wednesday" 
                        type="button"
                        onClick = { e => changeLabInfo(e.target.value, labId, "days")}
                    >
                        Wed
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Thursday") === -1}
                        value="Thursday" 
                        type="button"
                        onClick = { e => changeLabInfo(e.target.value, labId, "days")}
                    >
                        Thu
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Friday") === -1}
                        value="Friday" 
                        type="button"
                        onClick = { e => changeLabInfo(e.target.value, labId, "days")}
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