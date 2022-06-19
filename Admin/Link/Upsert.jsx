import { DialogForm, Text, Link } from '@Form'

const inputs = <>
    <Text
        column='Text'
        placeholder='Text'
        required='A link should have a text'
    />
    <Link
        column='Url'
        placeholder='URL'
        required='Please provide a URL'
    />
</>

const UpsertLink = () => {
    return <DialogForm
        entityType='Link'
        inputs={inputs}
    />
}

export default UpsertLink