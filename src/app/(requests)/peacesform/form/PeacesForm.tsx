import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'

const PeacesForm = () => {
  return (
    <CustomForm.Root>
      <CustomForm.FormField
        id="name"
        label="Name"
        placeholder="Enter Your Name"
      />
      <CustomForm.FormField
        id="phone"
        label="Phone"
        placeholder="Enter Your Phone"
      />
      <CustomForm.FormField
        id="email"
        label="Email"
        placeholder="Enter Your Email"
      />
      <CustomForm.DropDown
        label="Delation"
        id="delegation"
        options={['Maputo', 'Beira', 'Moatize', 'Nampula', 'Pemba']}
      />
      <CustomForm.FormField
        id="plate"
        label="Plate"
        placeholder="Enter Car Plate"
      />
      <CustomForm.FormField
        id="quarter"
        label="Quarter"
        placeholder="Enter Peace Quarter"
      />
      <CustomForm.FormField
        id="description"
        label="Peace Description"
        placeholder="Enter Your Peace Description"
      />
      <div className="flex w-full justify-end">
        <PrimaryButton label="send" type="submit" />
      </div>
    </CustomForm.Root>
  )
}
export default PeacesForm
