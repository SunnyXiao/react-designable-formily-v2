import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema } from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner()
  useEffect(() => {
    loadInitialSchema(designer)
  }, [])
  const supportLocales = ['zh-cn', 'en-us']
  useEffect(() => {
    console.log(GlobalRegistry.getDesignerLanguage())
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('en-us')
    }
    GlobalRegistry.setDesignerLanguage('en-us')
  }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
          { label: '한국어', value: 'ko-kr' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      /> */}
      <Button
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  )
})
