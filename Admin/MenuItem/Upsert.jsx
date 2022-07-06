import { DialogForm, Text, Link } from '@Form'

const inputs = <>
    <Text
        column='Title'
        placeholder='Title'
        required='Title is required'
    />
    <Link
        column='Url'
        placeholder='URL'
    />
</>

const UpsertMenuItem = () => {

    return <DialogForm
        entityType='MenuItem'
        inputs={inputs}
    />
}

export default UpsertMenuItem