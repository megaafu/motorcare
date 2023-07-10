import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'

const QuoteForm = () => {
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
        id="milage"
        label="Milage"
        placeholder="Enter Car Milage"
      />
      <CustomForm.FormField
        id="description"
        label="Service Description"
        placeholder="Enter Your Service Description"
      />
      <div className="flex w-full justify-end">
        <PrimaryButton label="send" type="submit" />
      </div>
    </CustomForm.Root>
  )
}
export default QuoteForm
