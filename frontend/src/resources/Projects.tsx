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
const ProjectsTitle = () => {
  const record = useRecordContext();
  return <span>Projects {record ? `"${ record.id }"` : ""}</span>;
};

export const ProjectsList = () => (
      <List actions={<ListActions  />} filters={ResourceFilters} >
        <DatagridConfigurable>
          <TextField source="Title" />
<TextField source="Description" />
<TextField source="Deadline" />
<TextField source="AssignedTasks" />
<NumberField source="id" /><EditButton />

        </DatagridConfigurable>
      </List>
      );

export const ProjectsEdit = () => (
                    <Edit title={<ProjectsTitle />}>
                      <SimpleForm>
                          <TextInput source="Title"   />
<TextInput source="Description"   />
<TextInput source="Deadline"   />
<TextInput source="AssignedTasks"   />
<NumberInput source="id"   disabled/>
                      </SimpleForm>
                    </Edit>
                  );

export const ProjectsCreate = () => (
                                  <Create>
                                    <SimpleForm>
                                        <TextInput source="Title"   />
<TextInput source="Description"   />
<TextInput source="Deadline"   />
<TextInput source="AssignedTasks"   />
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


