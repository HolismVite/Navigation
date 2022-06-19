import { DialogForm, Text } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Please provide the title'
    />
</>

const UpsertLinkGroup = (props) => {
    const { large } = props || { large: undefined }
    return <DialogForm
        entityType='LinkGroup'
        inputs={inputs}
        large={large}
    />
}

export default UpsertLinkGroup