import { CustomForm } from '@/components/CustomForm'
import PrimaryButton from '@/components/ui/PrimaryButton'

const TestDriveForm = () => {
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
      <CustomForm.DatePicker
        id="expiredDate"
        label="Drive Lincense Expired Date"
      />
      <CustomForm.FormField
        id="drivelincese"
        label="Drive Licence"
        placeholder="Enter Your Licence"
      />
      <CustomForm.FormField
        id="location"
        label="Location"
        placeholder="Enter Your Location"
      />
      <CustomForm.FormField
        id="carmodel"
        label="Car Model"
        placeholder="Enter Your Car Model"
      />
      <div className="flex w-full justify-end">
        <PrimaryButton type="submit">Send</PrimaryButton>
      </div>
    </CustomForm.Root>
  )
}
export default TestDriveForm
