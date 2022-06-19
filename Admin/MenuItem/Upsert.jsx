import { useState } from 'react'
import { DialogForm, Text, Link, Check } from '@Form'

const UpsertMenuItem = () => {
    // const [isDirectory, setIsDirectory] = useState(false)

    return <DialogForm
        entityType='MenuItem'
        inputs={<>
            <Text
                column='Title'
                placeholder='Title'
                required='Title is required'
            />
            {/* <Check
                column='IsDirectory'
                placeholder='Is directory'
            // change={value => setIsDirectory(value)}
            /> */}
            {/* {
                !isDirectory && <Link
                    column='Url'
                    placeholder='URL'
                />
            } */}
            <Link
                column='Url'
                placeholder='URL'
            />
        </>}
    />
}

export default UpsertMenuItem