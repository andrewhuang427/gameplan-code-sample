import { useState } from "react";
import { Group, SimpleGrid, Text, rem, Image } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { useCreateTournamentContext } from "./CreateTournamentContext";
import { FormWrapper } from "../../../shared/FormWrapper";

export const CreateTournamentUploadHeaderImageForm = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const { handleAdvanceToNextFormStep } = useCreateTournamentContext();

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
        alt="Dropzone image"
      />
    );
  });

  return (
    <FormWrapper
      title="Upload Header Image"
      cta="Continue"
      onSubmit={handleAdvanceToNextFormStep}
    >
      <Dropzone
        onDrop={setFiles}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-blue-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-red-6)",
              }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{
                width: rem(52),
                height: rem(52),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>
          <div>
            <Text inline>Drag images here or click to select files</Text>
            <Text size="xs" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? "xl" : 0}>
        {previews}
      </SimpleGrid>
    </FormWrapper>
  );
};
