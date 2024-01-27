import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  //EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  //UrlInput,
} from "react-admin";
import { useRecordContext } from "react-admin";
const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
        <SelectColumnsButton />
    </TopToolbar>
);
const CommentsTitle = () => {
  const record = useRecordContext();
  return <span>Comments {record ? `"${ record.id }"` : ""}</span>;
};

export const CommentsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Content" />
<TextField source="Author" />
<TextField source="Task" />
<TextField source="Timestamp" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const CommentsEdit = () => (
                    <Edit title={<CommentsTitle />}>
                      <SimpleForm>
                          <TextInput source="Content"   />
<TextInput source="Author"   />
<TextInput source="Task"   />
<TextInput source="Timestamp"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const CommentsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Content"   />
<TextInput source="Author"   />
<TextInput source="Task"   />
<TextInput source="Timestamp"   />
<NumberInput source="id"   disabled/>
                                    </SimpleForm>
                                  </Create>
                                );

const ResourceFilters = [
      <TextInput source="q" label="Search" alwaysOn />,
,
,
,
,

    ];


